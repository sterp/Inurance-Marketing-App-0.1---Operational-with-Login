import DemoContent from '@fuse/core/DemoContent';
import FusePageSimple from '@fuse/core/FusePageSimple';
import { styled } from '@mui/material/styles';

const Root = styled(FusePageSimple)(({ theme }) => ({
	'& .FusePageSimple-header': {
		backgroundColor: theme.palette.background.paper,
		borderBottomWidth: 1,
		borderStyle: 'solid',
		borderColor: theme.palette.divider
	},
	'& .FusePageSimple-content': {},
	'& .FusePageSimple-sidebarHeader': {},
	'& .FusePageSimple-sidebarContent': {}
}));

function Tasks() {

	return (
		<Root
			header={
				<div className="p-24">
					<h4>{('TITLE')}</h4>
				</div>
			}
			content={
				<div className="p-24">
					<h4>Tasks</h4>
					<br />
					Tasks Content
				</div>
			}
		/>
	);
}

export default Tasks;
