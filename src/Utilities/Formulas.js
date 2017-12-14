export function BattleCalculation(Attacker, Defender) {
    const AttackerAttackSpeed = Attacker.speed - clamp((Attacker.weapon.weight - Attacker.strength), 0, 999);
    const DefenderAttackSpeed = Defender.speed - clamp((Defender.weapon.weight - Defender.strength), 0, 999);
    const doubleAttack = AttackerAttackSpeed - DefenderAttackSpeed;
    const secondAttacker = doubleAttack >= 4 ? Attacker : doubleAttack <= -4 ? Defender : null;
    const secondDefender = doubleAttack >= 4 ? Defender : doubleAttack <= -4 ? Attacker : null;

    let BattleResults = [];
    //First round
    BattleResults.push(AttackCalculation(Attacker, Defender));
    //Execute Result

    //Second round
    BattleResults.push(AttackCalculation(Defender, Attacker));
    //Execute Result

    //Third round
    if (secondAttacker && secondDefender) {
        BattleResults.push(AttackCalculation(secondAttacker, secondDefender));
        //Execute Result
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
        Damage,
        Attacker,
        Defender
    };
}

function ExecuteResult (result) {

}

function clamp (number, min, max) {
    return Math.min(Math.max(number, min), max);
};