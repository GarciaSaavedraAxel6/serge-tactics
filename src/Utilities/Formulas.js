export function BattleCalculation(Attacker, Defender) {
    let AttackerAttackSpeed = Attacker.speed - clamp((Attacker.weapon.weight - Attacker.strength), 0, 999);
    let DefenderAttackSpeed = Defender.speed - clamp((Defender.weapon.weight - Defender.strength), 0, 999);
    let doubleAttack = doubleAttack(AttackerAttackSpeed, DefenderAttackSpeed);
    let secondAttacker = doubleAttack === "Attacker" ? Attacker : Defender;
    let secondDefender = doubleAttack === "Defender" ? Attacker : Defender;

    let BattleResults = [];
    //First round
    BattleResults.push({
        attacker: Attacker,
        defender: Defender,
        result: AttackCalculation(Attacker, Defender)
    });
    //Second round
    BattleResults.push({
        attacker: Defender,
        defender: Attacker,
        result: AttackCalculation(Defender, Attacker)
    });
    //Third round
    if (doubleAttack) {
        BattleResults.push({
            attacker: secondAttacker,
            defender: secondDefender,
            result: AttackCalculation(secondAttacker, secondDefender)
        });
    }

    return BattleResults;
}

function AttackCalculation (Attacker, Defender) {
    //One Attack
    let DefenderAttackSpeed = Defender.speed - clamp((Defender.weapon.weight - Defender.strength), 0, 999);

    let WeaponAccuracy = Attacker.weapon.accuracy;
    let Accuracy = WeaponAccuracy + (Attacker.skill * 2) + (Attacker.Luck / 2) + Attacker.bonuses.accuracy;
    let Dodge = (DefenderAttackSpeed * 2) + Luck + Defender.bonuses.dodge;
    let HitChance = clamp((Accuracy - Dodge), 1, 99);
    let BaseDamage = clamp(Attacker.attack - (Attacker.weapon.isPhysical ? Defender.defense : Defender.resistance), 1, 999);
    let CritChance = clamp((Attacker.skill / 2) + Attacker.weapon.critical - Defender.luck + Attacker.bonuses.critical - Defender.bonuses.criticalReduction, 1, 99);

    let didHit = (Math.random() * 100) <= HitChance;
    let didCrit = (Math.rangom() * 100) <= CritChance;

    let Damage = (didHit ? (didCrit ? BaseDamage * 3 : BaseDamage) : null);

    return {
        WeaponAccuracy,
        Accuracy,
        Dodge,
        HitChance,
        BaseDamage,
        CritChance,
        didHit,
        didCrit,
        Damage
    };

}

function doubleAttack (attackerAS, defenderAS) {
    let difference = attackerAS - defenderAS;

    if (difference >= 4) {
        return "Attacker";
    }
    if (difference <= 4) {
        return "Defender";
    }

    return null;
}

function clamp (number, min, max) {
    return Math.min(Math.max(number, min), max);
};