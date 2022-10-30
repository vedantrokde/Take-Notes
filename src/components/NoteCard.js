import React from "react";
import PropTypes from "prop-types";
import {
	Avatar,
	Card,
	CardContent,
	CardHeader,
	IconButton,
	Typography,
} from "@mui/material";
import { DeleteOutlined } from "@mui/icons-material";
import { yellow, green, pink, blue } from "@mui/material/colors";

function NoteCard(props) {
	const { note, handleDelete } = props;
	return (
		<Card
			elevation={3}
		>
			<CardHeader
				avatar={
					<Avatar
						style={{
							backgroundColor:
								note.category === "work" ? yellow[700] : note.category === "money" ? green[700] : note.category === "todos" ? pink[700] : blue[500],
						}}
					>
						{note.category[0].toUpperCase()}
					</Avatar>
				}
				action={
					<IconButton onClick={() => handleDelete(note.id)}>
						<DeleteOutlined />
					</IconButton>
				}
				title={note.title}
				subheader={note.category}
			/>
			<CardContent>
				<Typography variant="body2" color="textSecondary">
					{note.details}
				</Typography>
			</CardContent>
		</Card>
	);
}

NoteCard.propTypes = {
	note: PropTypes.object.isRequired,
	handleDelete: PropTypes.func.isRequired,
};

export default NoteCard;
