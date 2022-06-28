import classes from "../scss/CssModules.module.scss";
import { memo, FC } from "react";

// any.......使ってしまた
export const TabsUnderBar:FC<any> = memo((prop) => {
  console.log("TabsUnderBarレンダリング");
  
  const {atBar} = prop;

  return(
    <div className={classes.tabsUnderBar}>
        <span className={classes.tabsGrayBar}></span>
        <span className={classes.tabsBlueBarWrapper + " " + atBar}><span className={classes.tabsBlueBar}></span></span>
    </div>
  )
});