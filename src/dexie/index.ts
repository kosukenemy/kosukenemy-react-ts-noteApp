import Dexie from "dexie";
import { CreateItemsType } from '../types'

class MyDataBase extends Dexie {
  memo!: Dexie.Table<CreateItemsType, number>

  constructor(){
    super("memoStore")
  }
}

export const db = new Dexie("memoStore") as MyDataBase;

db.version(1)
  .stores({
    memo: "++id, title, description, tag, created_at, checked"
  });
  
export const bulkPutItem = (
  {
    id, 
    title,
    description,
    tag, 
    created_at, 
    checked 
  }: CreateItemsType) => {
    db.memo.bulkPut([
      {
        id: id,
        title: title,
        description: description,
        tag: tag,
        created_at: created_at,
        checked: checked
      }
    ]).catch((err: unknown) => {
      console.log(err)
    }).then((id ) => {
      console.log(id, "追加されました")
    })
}
