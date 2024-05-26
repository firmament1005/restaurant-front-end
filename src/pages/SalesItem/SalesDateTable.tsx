import React from 'react';
import Table from '../../components/Table';

const ByDateData = {
    header: [
        "日付",
        "散歩",
        "キャストドリンクL",
        "ソフドリ",
        "チェキ落書き有り",
        "【遠隔】キャスドリL",
        "【遠隔】ショット",
        "【遠隔】キャストフード",
        "【遠隔】キャスドリS",
        "【遠隔】チェキ",
        "キャストドリンクS",
        "アルコール",
        "キャストフード",
        "フード500",
        "フード800",
        "フード1000",
        "持ち込み料",
        "シャメイ",
        "オムライス",
        "シャンメリーEX ロゼ",
        "シャンメリーEX ホワイト",
        "金箔しおシャンメリー",
        "キャストショット",
        "オタクショット",
        "1分撮影",
        "フード300",
        "キャストフード1300",
        "シャンメリーEX・ホワイト",
        "ガチャガチャ",
        "ガチャガチャオリシャン",
        "遠隔ガチャガチャ",
        "フィリコネーム入り",
        "1688 赤"
    ],
    data: []
}

const SalesDateTable: React.FC = () => {
    return (
        <Table header={ByDateData.header} data={ByDateData.data} style='mt-5' />
    )
}

export default SalesDateTable;