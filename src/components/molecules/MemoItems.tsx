import React from 'react'
import styled from 'styled-components'

const MemoItems = () => {

  type sampleType = {
    title: string,
    tag: string,
    created_at: string,
    checked: number,
  }

  const sample = [{
    title: "テストテストテストテスト",
    tag: "タグタグタグタグ",
    created_at: "2022/2/22",
    checked: 1,
  }];

  return (
    <div>
      {sample.map(({ title, tag, created_at, checked }:sampleType) => (
        <div key={title}>
          <h3>{title}</h3>
          <span>{tag}</span>
          <span>{checked && "お気に入り済み"}</span>
          <time>{created_at}</time>
        </div>
      ))}
    </div>
  )
}

export default MemoItems