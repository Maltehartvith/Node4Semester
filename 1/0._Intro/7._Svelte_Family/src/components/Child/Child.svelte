<script>
    export let childName;
    export let isGirl = false;
    export let stereotype = "";

    export let handleFamilyMeetingCall;

</script>

<div class:girly={isGirl} 
     class={stereotype || "beyond-any-stereotype"} 
     on:click|preventDefault={handleFamilyMeetingCall(childName)}
>
    <h3 class="child" >Hi, i am {childName}</h3>
</div>


<style>
    .girly{
        background-color: palevioletred;
    }
    .black-sheep{
        background-color: black;
        color: white;
    }
    .bright-kid{
        background-color: gold;
    }
    .child{
        cursor: pointer;
        user-select: none;
    }
    
</style>
