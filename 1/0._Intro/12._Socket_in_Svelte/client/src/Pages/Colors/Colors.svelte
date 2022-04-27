<script>
    import io from "socket.io-client";

    const socket = io();

    let lastPersonToChangeAColor;

    socket.on("changeTheColor", ({ data, username }) => {
        //ikke svelte vejen.
        document.body.style.backgroundColor = data
        lastPersonToChangeAColor = username;
    })

    function changeColor(event) {
        socket.emit("colorChanged", { data: event.target.value })
    }

</script>

<input type="color" on:change={changeColor}>
<h1>Last person to change a color: {lastPersonToChangeAColor}</h1>