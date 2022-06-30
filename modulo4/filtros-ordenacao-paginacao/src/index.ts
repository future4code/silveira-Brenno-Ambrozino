import { app } from "./app";
import { getUsers } from "./endpoints/getUsers";
import { getUsersByName } from "./endpoints/getUsersByName";
import { getUsersByPages } from "./endpoints/getUsersByPages";
import { getUsersByType } from "./endpoints/getUsersByType";
import { getUsersOrdered } from "./endpoints/getUsersOrdered";

app.get("/users", getUsers)
app.get("/users/name", getUsersByName)
app.get("/users/ordered", getUsersOrdered)
app.get("/users/pages", getUsersByPages)
app.get("/users/:type", getUsersByType)