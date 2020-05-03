import * as rm from "typed-rest-client/RestClient";

interface Event {
  id: string; 
  name: string;
  created: Date
}

interface EventCreate {
  name: string; 
}

async function getEvents(){
  let rest: rm.RestClient = new rm.RestClient(undefined, 'http://localhost:9090'); 

  let res: rm.IRestResponse<Event> = await rest.get<Event>('/events');
  console.log(res.statusCode);
  console.log(res.result);
}

async function postEvent(nameParam : string) : Promise<string> { 
  let e : EventCreate = { name: nameParam}; 
  let rest: rm.RestClient = new rm.RestClient(undefined, 'http://localhost:9090'); 

  let res: rm.IRestResponse<Event> = await rest.create<Event>('/events', e);
  console.log(res.statusCode);
  console.log(res.result);
  console.log(res.result?.name)

  return res.result?.id || ""; 
}

getEvents(); 
postEvent("Posted from Typescript");