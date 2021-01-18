import Link from "next/link";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

export default function AppBarComponent() {
  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <Link href="/home">
          <a>
            <Typography variant="h6">Home</Typography>
          </a>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
