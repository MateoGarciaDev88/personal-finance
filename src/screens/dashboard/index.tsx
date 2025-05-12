import { Box, useMediaQuery, useTheme } from '@mui/material';
import DashboardBox from '../../components/DashboardBox';

const gridTemplate = `
  "a a a"
  "a a a"
  "a a a"
  "a a a"
  "a a a"
  "a a a"
  "b c d"
  "b c d"
  "b c d"
  "b c d"
`

const gridTemplateSmall = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "d"
`

const Dashboard = () => {
  const { palette } = useTheme();

  const isAboveMedium = useMediaQuery("(min-width: 1200px)");
  return (
    <Box 
      color={palette.grey[300]}
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMedium ? {
          gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
          gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
          gridTemplateAreas: gridTemplate,
        } : {
          gridAutoColumns: "1fr",
          gridAutoRows: "80px",
          gridTemplateAreas: gridTemplateSmall,
        }
      }
    >
      <DashboardBox gridArea="a"></DashboardBox>
      <DashboardBox gridArea="b"></DashboardBox>
      <DashboardBox gridArea="c"></DashboardBox>
      <DashboardBox gridArea="d"></DashboardBox>
    </Box>
  )
}

export default Dashboard;