# Git Empty

## アプリ概要

Gitコマンドを空打ちして練習するアプリ  
主なメインターゲットは私同様、未経験～駆け出しエンジニア  
元々は寿司打のエンジニアバージョンを想定していましたが、  
メインのターゲット層から分からないコマンドがあった時はゆっくり調べてほしい  
という想いで時間制限なく遊べるアプリにしました  

## 主な使用技術

- TypeScript
- Next.js(App Router)
- Tailwind CSS
- Firebase
- Jest
- Playwright
- Storybook
- GitHub Actions

## 反省点

アプリ設計の経験がなく、画面デザインのみの見切り発車で開発を始めてしまったためか  
何度も作り直しをしてしまい想定以上に時間が掛かってしまいました  
また、当初の予定ではインタラクション周りの制御をzustandを使って行うつもりだったが  
シンプルなアプリの実装に対してコードが複雑化してしまう為、シンプルにpropsで制御用関数を親コンポーネントから渡す形にしました  
Figmaを使って初めてデザインに挑戦しましたが、Figma上の見た目の実際に実装した時の印象の違いが大きく何度も修正する事になってしまったので、Figmaは要練習  
Storybookを使っていたので、細かい修正はやりやすかったです  

## 今後の改良点

頻繁に表示されるデータが更新されるこのアプリでは、App RouterのReact cacheを使うよりも素直にCSRでデータフェッチを行い、FirebaseのJavascript SDKをroute handlerに隠蔽する設計の方が良かったかもしれないのでver2に向けてどちらの方がいいかパフォーマンステストを行っていきたいです  
また、問題が中級編までしか無いので何か思いついたら上級編を実装する予定です  
問題のデータをFirebaseに置いている理由でもありますが、最悪フロントエンドを一から再設計して作り直すかも？  
