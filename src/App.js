import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { Divider, Grid, Typography } from "@mui/material";
import styles from "./App.module.css";

function App() {
  const classData = [
    {
      id: 1,
      name: "Math",
      teacher: "Mr.Sumit",
      room: "101",
    },
    {
      id: 2,
      name: "Physics",
      teacher: "Mr.Vyas",
      room: "101",
    },
    {
      id: 3,
      name: "Bio",
      teacher: "Mr.C",
      room: "101",
    },
  ];
  const [classes, setClasses] = useState(classData);
  const [newClassName, setNewClassName] = useState("");
  const [newTeacher, setNewTeacher] = useState("");
  const [newRoom, setNewRoom] = useState("");

  const handleCreateClass = () => {
    const newClass = {
      id: classes.length + 1,
      name: newClassName,
      teacher: newTeacher,
      room: newRoom,
    };
    setClasses([...classes, newClass]);
    setNewClassName("");
    setNewTeacher("");
    setNewRoom("");
  };
  const handleUpadteClass = (id, updateClass) => {
    const updateClasses = classes.map((cls) =>
      cls.id === id ? { ...cls, ...updateClass } : cls
    );
    setClasses(updateClasses);
  };
  const handleDeleteClass = (id) => {
    const deleteClass = classes.filter((cls) => cls.id !== id);
    setClasses(deleteClass);
  };
  console.log(classes);
  return (
    <React.Fragment>
      <Grid item p={2}>
        <Typography className={styles.headintText}>Dashboard</Typography>
        <Divider />
        <Grid item>
          <h2>Create a new Class</h2>
          <Grid container spacing={2}>
            <Grid item>
              <input
                type="text"
                placeholder="Class Name"
                value={newClassName}
                onChange={(e) => setNewClassName(e.target.value)}
              />
            </Grid>
            <Grid item>
              <input
                type="text"
                placeholder="Teacher"
                value={newTeacher}
                onChange={(e) => setNewTeacher(e.target.value)}
              />
            </Grid>
            <Grid item>
              <input
                type="text"
                placeholder="Room"
                value={newRoom}
                onChange={(e) => setNewRoom(e.target.value)}
              />
            </Grid>
            <Grid item>
              <button onClick={handleCreateClass}>Create Class</button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <h2>Classes</h2>
          <Grid item>
            <Grid item>
              <Grid container spacing={2} p={2}>
                <Grid item xs={3}>
                  <Typography style={{ fontWeight: "600" }}>
                    Class Name
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography style={{ fontWeight: "600" }}>
                    {" "}
                    Teacher Name
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <Typography style={{ fontWeight: "600" }}>Room no</Typography>
                </Grid>
              </Grid>
              <Divider />
            </Grid>
            {classes.map((cls, index) => (
              <Grid container key={index} spacing={4} p={2}>
                <Grid item xs={3}>
                  {cls.name}
                </Grid>
                <Grid item xs={3}>
                  {cls.teacher}
                </Grid>
                <Grid item xs={3}>
                  {cls.room}
                </Grid>
                <Grid item>
                  <Grid container spacing={2}>
                    <Grid item>
                      <button
                        onClick={() =>
                          handleUpadteClass(cls.id, { name: "Updated Name" })
                        }
                      >
                        Update
                      </button>
                    </Grid>
                    <Grid item>
                      <button onClick={() => handleDeleteClass(cls.id)}>
                        Delete
                      </button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default App;
