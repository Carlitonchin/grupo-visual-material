import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import BuyForm from "./buyForm";
import { brlCurrencyFormatter } from "@/components/utils/conversion";

export default function EnrollDialog({ course, setOpen, open }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="px-4 sm:px-4">
      <Dialog fullWidth maxWidth={"md"} open={open} onClose={handleClose}>
        <DialogTitle
          className="text-center sm:text-start"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Matricule-se
        </DialogTitle>

        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent dividers>
          <Typography
            lineHeight={"1.2rem"}
            fontSize={"1rem"}
            className="flex flex-col sm:flex-row items-center"
            gutterBottom
          >
            {course?.text || ""}
          </Typography>

          <Typography
            mt={3}
            sx={{ fontWeight: "bold" }}
            className="text-center sm:text-start"
            gutterBottom
          >
            {`Preço: ${brlCurrencyFormatter.format(course?.price || 0)}`}
          </Typography>
        </DialogContent>
        <DialogActions>
          <BuyForm
            courses={[{ item: course, cant: 1 }]}
            handleClose={handleClose}
            isCart={false}
          />
        </DialogActions>
      </Dialog>
    </div>
  );
}
