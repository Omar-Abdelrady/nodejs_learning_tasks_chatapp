import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import AuthApi from "@/pages/api/auth/auth";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AuthMiddleware from "@/components/authMiddleware";
import { io } from "socket.io-client";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    socketInitializer();
  });
  const socketInitializer = async () => {
    await fetch("http://localhost:4000/api/v1/messages");
    const socket = io();
    console.log(socket);
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("disconnect", () => {
      console.log("connected");
    });
  };

  return (
    <AuthMiddleware>
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`${styles.main} ${inter.className}`}>
          <Container maxWidth={"xl"}>
            <Grid
              container
              sx={{ borderRadius: 1, bgcolor: "background.paper" }}
            >
              <Grid
                md={4}
                sx={{
                  p: 2,
                }}
              >
                <Box
                  sx={{
                    p: 1,
                  }}
                >
                  <List
                    sx={{
                      width: "100%",
                      maxWidth: 360,
                    }}
                  >
                    <ListItem
                      alignItems="flex-start"
                      sx={{
                        bgcolor: "grey",
                      }}
                    >
                      <ListItemAvatar>
                        <Avatar
                          alt="Remy Sharp"
                          src="/static/images/avatar/1.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Brunch this weekend?"
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Ali Connors
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Travis Howard"
                          src="/static/images/avatar/2.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Summer BBQ"
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              to Scott, Alex, Jennifer
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar
                          alt="Cindy Baker"
                          src="/static/images/avatar/3.jpg"
                        />
                      </ListItemAvatar>
                      <ListItemText
                        primary="Oui Oui"
                        secondary={
                          <>
                            <Typography
                              sx={{ display: "inline" }}
                              component="span"
                              variant="body2"
                              color="text.primary"
                            >
                              Sandra Adams
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                  </List>
                </Box>
              </Grid>
              <Grid md={8} sx={{ p: 2 }}>
                <Box
                  sx={{
                    p: 1,
                    height: "100%",
                  }}
                >
                  {/*  messages container  */}
                  <Grid
                    item
                    xs={12}
                    sx={{
                      height: "100%",
                    }}
                  >
                    <Box
                      sx={{
                        p: 1,
                        height: "75%",
                      }}
                    >
                      <Typography variant="body1" component="h2">
                        Welcome to Next.js!
                      </Typography>
                    </Box>
                    <Box>
                      <TextField
                        id="outlined-basic"
                        label="Message"
                        variant="outlined"
                        sx={{
                          width: "100%",
                        }}
                      />
                    </Box>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </main>
      </>
    </AuthMiddleware>
  );
}