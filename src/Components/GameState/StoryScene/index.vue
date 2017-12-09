<template>
	<div class="screen">
        <div class="background"></div>
        <div id="leftCharacter" class="characterBust"></div>
        <div id="rightCharacter" class="characterBust"></div>
        <p class="storyText">There is some story happening here.</p>
    </div>
</template>

<script>
export default {
    name: 'StoryScene',
}
</script>

<style scoped>
    .background {
        position: fixed;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        background-image: url('../../../assets/logo.png');
        background-color: #5FD;
        background-repeat: space;
    }

    .storyText {
        width: 90vw;
        height: 25vh;
        background: rgba(255, 255, 255, 0.8);
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 5px;
        margin: 10px 5vw;
    }

    .characterBust {
        height: 70vh;
        width: 35vw;
        background-color: rgba(100, 100, 250, 0.8);
    }

    #leftCharacter {
        position: fixed;
        top: 15vh;
        left: 5vw;
    }

    #rightCharacter {
        position: fixed;
        top: 15vh;
        right: 5vw;
    }
</style>
