<script>
    import Parent from '../../components/Parent/Parent.svelte'
    import Child from '../../components/Child/Child.svelte';
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
</script>

<h1>This is the home of the Svelte Family</h1>
{#each parents as parent (parent.key)}
<Parent parent={parent.name} />
{/each}
<Child name="Alex"/>
<Child name="Alexis"/>
<Child name="Alexandar"/>