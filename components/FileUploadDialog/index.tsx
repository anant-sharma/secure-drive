import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { createStyles, Theme, withStyles, WithStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: 0,
			padding: theme.spacing(2),
		},
		closeButton: {
			position: "absolute",
			right: theme.spacing(1),
			top: theme.spacing(1),
			color: theme.palette.grey[500],
		},
	});

export interface DialogTitleProps extends WithStyles<typeof styles> {
	id: string;
	children: React.ReactNode;
	onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

const DialogContent = withStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);

interface IFileUploadDialog {
	open: boolean;
	onClose: () => {};
}

export function FileUploadDialog(props) {
	const { open = false, onClose = () => {} } = props;

	return (
		<div>
			<Dialog onClose={onClose} aria-labelledby="customized-dialog-title" open={open} maxWidth={"lg"}>
				<DialogTitle id="customized-dialog-title" onClose={onClose}>
					Modal title
				</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>
						Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in,
						egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
					</Typography>
					<Typography gutterBottom>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel
						augue laoreet rutrum faucibus dolor auctor.
					</Typography>
					<Typography gutterBottom>
						Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque
						nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
					</Typography>
				</DialogContent>
				<DialogActions>
					<Button autoFocus onClick={onClose} color="primary">
						Save changes
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
