import classes from "./scss/CssModules.module.scss";
import { ChangeEvent, useState, FC, useCallback } from "react";
import { Tabs } from "./components/Tabs.tsx";
import {TabsUnderBar} from "./components/TabsUnderBar.tsx";
import { ViewMemos } from "./components/ViewMemos.tsx";

type Memo = {
  text: string, 
  checked: boolean
}

export const App:FC = () => {

  console.log("----------------開始----------------")
  console.log("App レンダリング");
  
  //input内のテキスト
  const[text, setText] = useState<string>("");
  //型定義できなかった〜〜〜〜、青線移動させるためのもの
  const[atBar, setAtBar] = useState(classes.barAll);
  const[memos, setMemos] = useState<Memo[]>([]);

  // barの移動
  const onAllBar = useCallback(() => {
    setAtBar(classes.barAll);
  }, []);
  const onActiveBar = useCallback(() => {
    setAtBar(classes.barActive);
  }, []);
  const onCompletedBar = useCallback(() => {
    setAtBar(classes.barCompleted);
  }, []);

  //input内のテキストを取得
  const onChangeText = (e:ChangeEvent<HTMLInputElement>) => setText(e.target.value);

  //メモの追加
  const onClickAdd = () => {
    const newMemos = [...memos];
    const createdMemo = {
      text: text,
      checked: false
    }

    newMemos.push(createdMemo);
    setMemos(newMemos);
    setText("");
  }

  //メモの削除
  const onClickDelete = useCallback((index: number) => {
    const newMemos = [...memos];
  
    newMemos.splice(index,1);
    setMemos(newMemos);
  },[memos]);

  return (
    <div className={classes.container}>
      <h1>#todo</h1>
      {/* All Active Completed のタブたち*/}
      <Tabs onAllBar={onAllBar} onActiveBar={onActiveBar} onCompletedBar={onCompletedBar}></Tabs>
      {/* タブの下線 */}
      <TabsUnderBar atBar={atBar}></TabsUnderBar>
      {/* メモの追加 */}
      <div className={classes.addMemoContainer}>
        <input type="text" value={text} onChange={onChangeText} />
        <button className={classes.button} onClick={onClickAdd}>Add</button>
      </div>
      {/* メモの一覧表示 */}
      <ViewMemos atBar={atBar} memos={memos} onClickDelete={onClickDelete}></ViewMemos>
    </div>
  )
};