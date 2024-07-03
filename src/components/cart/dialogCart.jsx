import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import AddBoxIcon from "@mui/icons-material/AddBox";
import IndeterminateCheckBoxIcon from "@mui/icons-material/IndeterminateCheckBox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import BuyForm from "./buyForm";
import { brlCurrencyFormatter } from "@/components/utils/conversion";

export default function DialogCart({
  open,
  setOpen,
  courses,
  RemoveFromCart,
  AddToCart,
  SubFromCart,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  function calculateSum() {
    let sum = 0;
    if (!courses?.length) return sum;

    courses.forEach((c) => (sum += (c?.item?.price || 0) * (c?.cant || 0)));

    return brlCurrencyFormatter.format(sum);
  }
  return (
    <div className="px-4 sm:px-8">
      <Dialog fullWidth maxWidth={"md"} open={open} onClose={handleClose}>
        <DialogTitle
          className="text-center sm:text-start"
          sx={{ m: 0, p: 2 }}
          id="customized-dialog-title"
        >
          Carrinho
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
          {courses?.length > 0 ? (
            <>
              {courses.map((c, index) => (
                <Typography
                  key={c?.item?.id}
                  mb={index < courses.length - 1 ? 2 : 0}
                  lineHeight={"1.2rem"}
                  fontSize={"1rem"}
                  className="flex flex-col sm:flex-row items-center"
                  gutterBottom
                >
                  <span className="flex -mt-1 text-slate-800 items-center font-bold gap-x-1 mb-1 mr-0 sm:mb-0 sm:mr-2">
                    <button onClick={() => SubFromCart(c.item)}>
                      <IndeterminateCheckBoxIcon className=" w-5 h-5" />
                    </button>
                    {c.cant}
                    <button onClick={() => AddToCart(c.item)}>
                      <AddBoxIcon className=" w-5 h-5" />
                    </button>
                  </span>
                  <span className="flex flex-row justify-center items-start text-center sm:text-start sm:justify-start">
                    <button
                      onClick={() => RemoveFromCart(c?.item)}
                      className="w-fit h-fit p-0 -mt-1 sm:hidden"
                    >
                      <DeleteForeverIcon
                        sx={{ fill: "#ef4444" }}
                        className="hover:scale-125 duration-200 p-0 m-0 w-6 h-6 mr-1 "
                      />
                    </button>
                    <span>
                      {c.item.text}
                      {": "}
                      <span className="font-bold">
                        {brlCurrencyFormatter.format(c.cant * c.item.price)}
                      </span>
                    </span>
                    <button
                      onClick={() => RemoveFromCart(c?.item)}
                      className="w-fit h-fit p-0 -mt-1 hidden ml-1 sm:flex"
                    >
                      <DeleteForeverIcon
                        sx={{ fill: "#ef4444" }}
                        className="hover:scale-125 duration-200 p-0 m-0 w-6 h-6 mr-1 "
                      />
                    </button>
                  </span>
                </Typography>
              ))}
              <Typography
                mt={3}
                sx={{ fontWeight: "bold" }}
                className="text-center sm:text-start"
                gutterBottom
              >
                {`Total: ${calculateSum()}`}
              </Typography>
            </>
          ) : (
            <Typography gutterBottom>Sem cursos no carrinho</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <BuyForm courses={courses} handleClose={handleClose} isCart={true} />
        </DialogActions>
      </Dialog>
    </div>
  );
}
