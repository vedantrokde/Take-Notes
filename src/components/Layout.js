import React from "react";
import PropTypes from "prop-types";
import {
	AppBar,
	Avatar,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
} from "@mui/material";
import { SubjectOutlined, AddCircleOutlineOutlined } from "@mui/icons-material";
import { useNavigate, useLocation } from "react-router-dom";
import { format } from 'date-fns';

const drawerWidth = 240;

function Layout(props) {
	const { children } = props;
	const navigate = useNavigate();
	const location = useLocation();
	const menuItems = [
		{
			text: "My Notes",
			icon: <SubjectOutlined color="secondary" />,
			path: "/",
		},
		{
			text: "Create Note",
			icon: <AddCircleOutlineOutlined color="secondary" />,
			path: "/create",
		},
	];

	return (
		<div
			style={{
				display: "flex",
			}}
		>
			{/* app bar */}
			<AppBar
				elevation={0}
				sx={{ width: `calc(100% - ${drawerWidth}px)`, backgroundColor: '#fefefe', color: '#000' }}
			>
				<Toolbar>
					<Typography flexGrow={1}>
						Today is the {format( new Date(), 'do MMMM Y')}
					</Typography>
					<Typography>
						Mario
					</Typography>
					<Avatar src='/mario-av.png' sx={{ marginLeft: 2 }}/>
				</Toolbar>
			</AppBar>

			{/* side drawer */}
			<Drawer
				variant="permanent"
				anchor="left"
				classes={{
					paper: {
						width: drawerWidth,
					},
				}}
				sx={{
					width: drawerWidth,
				}}
			>
				<div>
					<Typography variant="h5" sx={{ padding: 2 }}>
						Take Notes
					</Typography>
				</div>

				<List>
					{menuItems.map((item) => (
						<ListItem
							button
							key={item.text}
							onClick={() =>
								navigate(item.path, { replace: true })
							}
							className={
								location.pathname === item.path
									? "active"
									: null
							}
						>
							<ListItemIcon>{item.icon}</ListItemIcon>
							<ListItemText primary={item.text} />
						</ListItem>
					))}
				</List>
			</Drawer>
			<div className="main">{children}</div>
		</div>
	);
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
