export let js = (async () => {
    let json = await (await fetch("src\\user.json")).json();
    console.log(json);
  })();