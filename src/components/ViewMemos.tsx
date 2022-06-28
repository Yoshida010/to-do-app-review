import classes from "../scss/CssModules.module.scss";
import { useState, useCallback, memo, FC } from "react";

type Memo = {
  text: string, 
  checked: boolean
}

type Props = {
  atBar: any,
  memos: Memo[],
  onClickDelete: (index:number)=>void
}

export const ViewMemos:FC<Props> = memo((props) => {
  //チェックボックスをリアルタイムで反映させるためのもの
  const[checked, setChecked] = useState<boolean>(false);
  const {atBar, memos, onClickDelete} = props;

  console.log("ViewMemosレンダリング");

  //チェックボックスにチェックを入れる・外すとき
  const onCheck = (index: number) => {
    memos[index].checked = !memos[index].checked;
    //チェックボックスを無理やり更新！？いいのか！？！？
    setChecked(!checked);
  };

  //表示するメモのみピックアップ
  const showMemos = memos.map((memo)=>{
    if(atBar === classes.barAll){
      return memo;
    }else if(atBar === classes.barActive){
      if(!memo.checked){
        return memo;
      }
    }else if(atBar === classes.barCompleted){
      if(memo.checked){
        return memo;
      }
    }
  })

  return(
      <div id={atBar} className={classes.memoContainer}>
        <ul>
          {showMemos.map((memo, index) => {
            if(memo !== undefined){
              return(
                  <li key={memo.text}>
                    <label>
                      <input onChange={()=>onCheck(index)} type="checkbox" checked={memo.checked}/>
                      {memo.text}
                    </label>
                    <button onClick={() => onClickDelete(index)}>削除</button>
                  </li>
              )
            }
          })}
        </ul>
      </div>
  )
});