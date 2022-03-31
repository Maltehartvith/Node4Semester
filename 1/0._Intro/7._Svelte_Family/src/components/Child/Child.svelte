<script>
    export let childName;
    export let isGirl = false;
    export let stereotype = "";

    export let handleFamilyMeetingCall;
    import {supermarket} from '../../store/supermarket.js'

    function eatCandy(){
        console.log("namme nam")
        supermarket.update(storeValue => {
            if(storeValue.candy > 0 && !isNaN(storeValue.candy)){
                storeValue.candy -=1;
                return storeValue
            }else{
                
            }
        });
        
    }
</script>

<div class:girly={isGirl} 
     class={stereotype || "beyond-any-stereotype"} 
     
>
    <h3 class="child" on:click|preventDefault={handleFamilyMeetingCall(childName)}>Hi, i am {childName}</h3>
    <div>Pieces of candy: {$supermarket.candy}</div>
    <button on:click={eatCandy}>eat candy</button>

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
