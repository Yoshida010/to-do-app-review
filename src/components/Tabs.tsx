import classes from "../scss/CssModules.module.scss";
import { memo, FC } from "react";


type Props = {
  onAllBar: ()=>void,
  onActiveBar: ()=>void,
  onCompletedBar: ()=>void
}

export const Tabs:FC<Props> = memo((props) => {
  console.log("Tabsレンダリング");
  
  const {onAllBar, onActiveBar, onCompletedBar} = props;

  return(
    <ul className={classes.tabs}>
      <li onClick={onAllBar}>All</li>
      <li onClick={onActiveBar}>Active</li>
      <li onClick={onCompletedBar}>Completed</li>
    </ul>
  )
});