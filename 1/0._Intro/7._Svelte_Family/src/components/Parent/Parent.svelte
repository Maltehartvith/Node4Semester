<script>
    export let parentName;
    export let handleFamilyMeetingCall;


</script>


<h2 class="parent" on:click={handleFamilyMeetingCall(parentName)}>I am a Svelte Parent. I am the {parentName}</h2>

<style>
    .parent{
        cursor: pointer;
        user-select: none;
    }
    
</style>