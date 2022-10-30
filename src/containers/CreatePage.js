import React, { useState } from "react";
import {
	Button,
	Typography,
	Container,
	TextField,
	Radio,
	RadioGroup,
	FormLabel,
	FormControl,
	FormControlLabel,
} from "@mui/material";
import { KeyboardArrowRight } from "@mui/icons-material";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function CreatePage() {
	const navigate = useNavigate();

	const [title, setTitle] = useState("");
	const [details, setDetails] = useState("");
	const [category, setCategory] = useState("");
	const [titleError, setTitleError] = useState(false);
	const [detailsError, setDetailsError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setTitleError(false);
		setDetailsError(false);

		if (title === "") setTitleError(true);
		if (details === "") setDetailsError(true);

		if (title && details) {
			fetch("http://localhost:8000/notes", {
				method: "POST",
				headers: {
					"Content-type": "application/json",
				},
				body: JSON.stringify({ title, details, category }),
			}).then(() => navigate("/", { replace: true })
			);
		}
	};

	return (
		<Container>
			<Typography
				variant="h6"
				component="h2"
				gutterBottom
				color="textSecondary"
				sx={{ marginBottom: 2, fontWeight: 500 }}
			>
				Create a New Note
			</Typography>

			<form noValidate autoComplete="off" onSubmit={handleSubmit}>
				<TextField
					onChange={(e) => setTitle(e.target.value)}
					label="Note Title"
					color="secondary"
					fullWidth
					required
					sx={{
						marginTop: 2,
						marginBottom: 2,
						display: "block",
					}}
					error={titleError}
				/>
				<TextField
					onChange={(e) => setDetails(e.target.value)}
					label="Details"
					color="secondary"
					fullWidth
					required
					multiline
					rows={4}
					sx={{
						marginTop: 2,
						marginBottom: 2,
						display: "block",
					}}
					error={detailsError}
				/>

				<FormControl
					sx={{
						marginTop: 2,
						marginBottom: 2,
						display: "block",
					}}
				>
					<FormLabel>Note Category</FormLabel>
					<RadioGroup
						value={category}
						onChange={(e) => setCategory(e.target.value)}
					>
						<FormControlLabel
							control={<Radio />}
							label="Money"
							value="money"
						/>
						<FormControlLabel
							control={<Radio />}
							label="Todos"
							value="todos"
						/>
						<FormControlLabel
							control={<Radio />}
							label="Reminders"
							value="reminders"
						/>
						<FormControlLabel
							control={<Radio />}
							label="Work"
							value="work"
						/>
					</RadioGroup>
				</FormControl>

				<Button
					variant="contained"
					color="secondary"
					type="submit"
					endIcon={<KeyboardArrowRight />}
					sx={{
						backgroundColor: purple[500],
						"&:hover": {
							backgroundColor: "blue",
						},
					}}
				>
					Submit
				</Button>
			</form>
		</Container>
	);
}
