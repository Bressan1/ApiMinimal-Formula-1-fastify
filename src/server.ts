import fastify from "fastify";
import cors from "@fastify/cors";


const server = fastify({
    logger: true});


server.register(cors, {
    origin: "*",
});


const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Itália" },
  { id: 2, name: "McLaren", base: "Woking, Reino Unido" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, Reino  Unido" },
  { id: 4, name: "Mercedes", base: "Brackley, Reino Unido" },
  { id: 5, name: "Aston Martin", base: "Silverstone, Reino Unido" },
  { id: 6, name: "Alpine", base: "Enstone, Reino Unido" },
  { id: 7, name: "Williams", base: "Grove, Reino Unido" },
  { id: 8, name: "Haas", base: "Kannapolis, EUA" },
  { id: 9, name: "Sauber", base: "Hinwil, Suíça" }, // Stake F1 / futuro Audi
  { id: 10, name: "RB", base: "Faenza, Itália" }, // Racing Bulls (ex-AlphaTauri)
];


const drivers = [
  // Ferrari
  { id: 1, name: "lewis hamilton", team: "ferrari" },
  { id: 2, name: "charles leclerc", team: "ferrari" },

  // Red Bull Racing
  { id: 3, name: "max verstappen", team: "red bull racing" },
  { id: 4, name: "sergio perez", team: "red bull racing" },

  // McLaren
  { id: 5, name: "lando norris", team: "mclaren" },
  { id: 6, name: "oscar piastri", team: "mclaren" },

  // Mercedes
  { id: 7, name: "george russell", team: "mercedes" },
  { id: 8, name: "andrea kimi antonelli", team: "mercedes" },

  // Aston Martin
  { id: 9, name: "fernando alonso", team: "aston martin" },
  { id: 10, name: "lance stroll", team: "aston martin" },

  // Alpine
  { id: 11, name: "pierre gasly", team: "alpine" },
  { id: 12, name: "jack doohan", team: "alpine" },

  // Williams
  { id: 13, name: "alex albon", team: "williams" },
  { id: 14, name: "logan sargeant", team: "williams" },

  // Haas
  { id: 15, name: "esteban ocon", team: "haas" },
  { id: 16, name: "oliver bearman", team: "haas" },

  // Sauber (Stake / futuro Audi)
  { id: 17, name: "valtteri bottas", team: "sauber" },
  { id: 18, name: "guanyu zhou", team: "sauber" },

  // RB (Racing Bulls)
  { id: 19, name: "yuki tsunoda", team: "rb" },
  { id: 20, name: "liam lawson", team: "rb" },
];


server.get("/teams", async (request, response) => {
    response.type("application/json").code(200)
    return {teams};
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200)
    return {drivers};
});

interface driversParams {
    id: string;
}

server.get<{Params: driversParams}>('/drivers/:id', async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find( d => d.id === id);

    if(!driver){
        response.type("application/json").code(404);
        return {error: "motorista não encontrado"};
    } else {
        response.type("application/json").code(200);
        return {driver};
    }
});

server.listen({port: 3333}, () => {console.log("ouvindo")});

