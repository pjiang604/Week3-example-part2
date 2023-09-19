import "./tiles.css";
function random(n) {
  return Math.floor(Math.random() * n);
}

function Tiles() {
  return (
    <div className="tiles">
      <Tile name="Item 1" />
      <Tile name="Item 2" />
      <Tile name="Item 3" />
      <Tile name="Item 4" />
      <Tile name="Item 5" />
    </div>
  );
}

function Tile(props) {
  const red = random(255);
  const blue = random(255);
  const green = random(255);

  const color = `rgb(${red}, ${blue}, ${green})`;

  function handleDelete(e) {
    //alert(e.target === e.currentTarget);
    if (e.target == e.currentTarget) {
      return;
    } else {
      e.currentTarget.remove();
    }
  }

  return (
    <div
      className="tile"
      style={{ backgroundColor: color }}
      onClick={handleDelete}
    >
      {props.name}
      <span>x</span>
    </div>
  );
}

export default Tiles;

/*
Upload to github
1) Finish coding
2) Click Github icon
3) Name repository (something that you will REMEMBER)
4) Go to package.json file and add:
under “name”, add “homepage”: “https://cheungglenda.github.io/WHATYOUNAMEDYOURREPOSITORY”
under “scripts”, add “predeploy”: “npm run build” and “deploy”: “gh-pages -d build”
5) On terminal, type “npm install gh-pages —save-dev
6) npm run deploy
7) click link that was input under homepage. It should take a few minutes to build but it should work
this what i got
i THINK this is the steps*/
