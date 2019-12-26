import { Data } from "./datastore";

/**
 * オブジェクトの検索を行うモジュールです。
 *
 * DataStore, User, Role, Fileクラスから呼び出し、それぞれのクラスメソッドとして利用します。
 * 検索条件を設定するメソッドに続けてfetch/fetchAllをメソッドチェーンで実行して利用します。
 */
export declare class Query {
    /**
     * クエリを自分で記述して設定します。
     * @param where JSON形式のクエリオブジェクト
     */
    where(where: object): this;

    /**S
     * 指定したキーの値が条件と等しいオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    equalTo(key: string, value: any): this;

    /**
     * 指定したキーの値が条件と等しくないオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    notEqualTo(key: string, value: any): this;

    /**
     * 指定したキーの値が条件より小さいオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    lessThan(key: string, value: any): this;

    /**
     * 指定したキーの値が条件以下のオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    lessThanOrEqualTo(key: string, value: any): this;

    /**
     * 指定したキーの値が条件より大きいオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    greaterThan(key: string, value: any): this;

    /**
     * 指定したキーの値が条件以上のオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param value 比較する値
     */
    greaterThanOrEqualTo(key: string, value: any): this;

    /**
     * 指定したキーの値が、条件の配列内のいずれかと等しいオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param values 比較する値
     */
    in(key: string, values: Array<any>): this;

    /**
     * 指定したキーの値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param values 比較する値
     */
    notIn(key: string, values: Array<any>): this;

    /**
     * 指定したキーに値が存在するオブジェクトを検索します。
     * existにfalseが設定されている場合、指定したキーに値が存在しないオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param exists falseを設定した場合、値が存在しないオブジェクトを検索する。省略可能。
     */
    exists(key: string, exists?: boolean): this;

    /**
     * 指定したキーの値が指定した正規表現に合致する存在するオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param regex 検索する正規表現
     */
    regularExpressionTo(key: string, regex: string): this;

    /**
     * 指定したキーの配列内の値のいずれかが、条件の配列内のいずれかと等しいオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param values 比較する値
     */
    inArray(key: string, values: Array<any>): this;

    /**
     * 指定したキーの配列内の値が、条件の配列内のいずれとも等しくないオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param values 比較する値
     */
    inNotArray(key: string, values: Array<any>): this;

    /**
     * 指定したキーの配列内の値が、条件の配列内のすべての値を含むオブジェクトを検索します。
     * @param key 値を比較するキー
     * @param values 比較する値
     */
    allInArray(key: string, values: Array<any>): this;

    /**
     * 複数の検索条件を設定し、いずれかに合致するオブジェクトを検索します。
     * 配列で複数の条件を一度に設定でき、複数回実行することで検索条件を追加できます。
     * @param subqueries 検索条件
     */
    or(subqueries: Array<Query>): this;

    /**
     * サブクエリの検索結果が指定したサブキーに持つ値のいずれかと、指定したキーが合致するオブジェクトを検索します。
     * @param key メインクエリのクラスで値を比較するキー
     * @param subkey サブクエリの検索結果で値を比較するキー
     * @param subquery 検索条件
     */
    select(key: string, subkey: string, subquery: Array<Query>): this;

    /**
     * 入力したオブジェクトの指定したキーに関連づけられているオブジェクトを検索します。
     * objectはmobile backend に保存済みである必要があります。
     * @param object 
     * @param key オブジェクトが関連づけられているキー
     */
    relatedTo(object: any, key: string): this;

    /**
     * サブクエリの検索結果のいずれかを、指定したキーにポインタで持つオブジェクトを検索します。
     * objectはmobile backend に保存済みである必要がある。
     * @param key ポインタを保存したキー
     * @param subquery 検索条件
     */
    inQuery(key: string, subquery: Query): this;

    /**
     * 指定したキーに設定されているポインタの中身ごと検索結果を取得します。
     * 複数回実行した場合、最後に設定したキーが反映されます。複数のキーを指定することはできません。
     * @param key ポインタの中身を取得するキー
     */
    include(key: string): this;

    /**
     * 検索結果の配列と共に、検索結果の件数を取得します。
     * 検索結果の配列は最大100件までしか取得しませんが、countは検索結果の総件数を表示します。
     * 検索結果配列にcountプロパティとして付加されます。
     */
    count(): this;

    /**
     * 検索結果の最大取得数を設定します。最小設定値は1、最大設定値は1000です。
     * @param limit 最大取得件数
     */
    limit(limit: number): this;

    /**
     * 指定したキーの昇順にソートして検索結果を取得します。
     * 複数回実行することで、複数のキーを指定できます。その場合、先に指定したキーが優先的にソートされます。
     * フラグによって降順ソートも可能です。降順フラグはキーごとに設定できます。
     * @param key ソートするキー
     * @param descending trueを指定した場合、降順でソートされる。省略可能。
     */
    order(key: string, descending?: boolean): this;

    /**
     * 検索結果の最初から指定した件数だけ除いた結果を取得するようにします。
     * @param skip 検索結果から除く件数
     */
    skip(skip: number): this;

    /**
     * 検索条件に合致するオブジェクトのうち、先頭の一つだけを取得します。
     * @param callback コールバック関数
     * @returns 検索結果に合致したオブジェクト
     */
    fetch(callback?: Function): Promise<Data | object>;

    /**
     * 検索条件に合致するオブジェクトをすべて取得します。
     * @param callback コールバック関数
     * @returns 検索結果に合致したオブジェクトの配列
     */
    fetchAll(callback?: Function): Promise<Array<Data>>;
}