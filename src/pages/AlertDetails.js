import React, { useState } from "react";
import { Typography, Button, Drawer, Chip, Avatar } from "@mui/material";
import { Grid } from "@mui/system";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineOppositeContent } from "@mui/lab";
import { useDispatch, useSelector } from "react-redux";
import AlertConfirmModal from "../modals/AlertConfirmModal";
import {
  archiveSelectedNotification,
  markNotificationAsRead,
} from "../slices/notificationsList";
import { notifyInfo } from "../actualAlert/actualAlertSlice";

export default function AlertDetails({ handleOpen, closeAction }) {
  const { selectedNotification = { person: [] } } = useSelector(
    (store) => store.notificationsList
  );

  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);

  const openConfirmModal = (newValue) => {
    setOpenModal(newValue);
  };

  return (
    <Drawer
      open={handleOpen}
      onClose={closeAction}
      anchor="right"
      PaperProps={{ sx: { width: 600 } }}
    >
      <Grid container>
        <Grid
          size={12}
          sx={{
            padding: "20px",
            backgroundColor: "#002e3c",
          }}
        >
          <Typography
            sx={{ fontWeight: "bold", fontSize: "16pt", color: "#ffd700" }}
          >
            {selectedNotification?.id} | {selectedNotification?.title}
          </Typography>
        </Grid>
        {selectedNotification?.url && (
          <Grid
            container
            spacing={1}
            size={12}
            sx={{
              padding: "20px",
              backgroundColor: "#b5cef777",

              color: "#333",
              "&:hover": {
                color: "blue",
                cursor: "pointer",
              },
            }}
          >
            <Grid>
              <OpenInNewIcon />
            </Grid>
            <Grid>
              <Typography
                sx={{ fontWeight: "bold", fontSize: "12pt", color: "inherit" }}
              >
                Go to the document
              </Typography>
            </Grid>
          </Grid>
        )}
        <Grid size={12}>
          <Timeline position="left">
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                09:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="warning" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Due date</TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color="text.secondary">
                {selectedNotification?.datetime}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="success" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>Created</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid>
        <Grid
          size={12}
          container
          spacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* {selectedNotification.person.map((person, index) => ((
            <Grid>
                <Chip
                  sx={{
                    backgroundColor: "green",
                    fontSize: "14pt",
                    padding: "1rem",
                  }}
                  avatar={
                    <Avatar
                      sx={{ width: 56, height: 56 }}
                      alt="Natacha"
                      src="https://avatar.iran.liara.run/public/45"
                    />
                  }
                  label={person.fullname}
                  variant="outlined"
                />
              </Grid>
          ))} */}

          {selectedNotification?.person?.map((person, index) => (
            <Grid>
              <Chip
                sx={{
                  backgroundColor: person?.approval ? "#388E3C99" : "#D32F2F99",
                  fontSize: "14pt",
                  padding: "1rem",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
                avatar={
                  <Avatar
                    sx={{ width: 56, height: 56 }}
                    alt="Natacha"
                    src="https://avatar.iran.liara.run/public/45"
                  />
                }
                label={
                  <>
                    <Typography>{person?.fullname}</Typography>
                    {!person?.approval ? (
                      <>
                        <Typography variant="overline">
                          waiting for approval
                        </Typography>
                      </>
                    ) : (
                      <>
                        <Typography variant="overline">approved</Typography>
                      </>
                    )}
                  </>
                }
                variant="outlined"
              />
            </Grid>
          ))}
        </Grid>
        <Grid size={10} offset={{ md: 1 }} sx={{ marginTop: "1rem" }}>
          <Typography>
            <Typography variant="body1" align="justify">
              {selectedNotification?.description}
            </Typography>
          </Typography>
        </Grid>
        <Grid size={4} offset={{ md: 7 }}>
          <Button
            variant="outlined"
            color="error"
            onClick={() => openConfirmModal(true)}
          >
            Move to Archive
          </Button>
        </Grid>
        {!selectedNotification?.read && (
          <Grid size={4} offset={{ md: 7 }}>
            <Button
              variant="text"
              color="primary"
              onClick={() =>
                dispatch(
                  markNotificationAsRead({ id: selectedNotification?.id })
                )
              }
            >
              mark as read
            </Button>
          </Grid>
        )}
      </Grid>

      <AlertConfirmModal
        open={openModal}
        handleClose={() => openConfirmModal(false)}
        title="Archive Notification Event"
        description="Are you sure?"
        action={() => {
          dispatch(
            archiveSelectedNotification({ id: selectedNotification.id })
          );
          openConfirmModal(false);
          closeAction();
          dispatch(notifyInfo("Notification event was archived. "));
        }}
      />
    </Drawer>
  );
}
