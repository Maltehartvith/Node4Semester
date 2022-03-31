<script>
    import Parent from '../../components/Parent/Parent.svelte'
    import Child from '../../components/Child/Child.svelte'

    import { supermarket } from '../../store/supermarket.js'
    console.log($supermarket)
const parents = [
    {
        key: 1,
        name: "mother"
    },
    {
        key: 2,
        name: "father"
    }
]

    function onFamilyMeetingCalled(whoCalled){
        console.log("Family meeting called by,", whoCalled)
    }

</script>

<h1>This is the home of the Svelte Family</h1>
{#each parents as parent (parent.key)}
<Parent handleFamilyMeetingCall={onFamilyMeetingCalled} parentName={parent.name} />
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} 
       stereotype="black-sheep" 
       childName="Alex"
/>

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} 
       stereotype="" 
       childName="Alexis" 
       isGirl={true}
/>

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} 
       stereotype="bright-kid" 
       childName="Alexandar"
/>
<p>{JSON.stringify($supermarket, null, 10)}</p>