const mongoose = require('mongoose');

//ShopApp はMongoDBのデータベース名
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('コネクションOK!!');
    })
    .catch(err => {
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'priceは0より大きい値にしてください']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        },
        size: {
            type: String,
            enum: ['S', 'M', 'L']
        }
    }
});

// productSchema.methods.greet = function () {
//     console.log('はろーーーやっほーーー');
//     console.log(`${this.name}からの呼び込み`);
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

//第一引数：モデル名（Mongoose内での名前。コレクション名の元になる）
// 第二引数：そのモデルが従う設計図（スキーマ）
const Product = mongoose.model('Product', productSchema);

//モデル（Product） = 設計図
//インスタンス（bikeやfoundProduct） = 設計図から作られた実物
//async = 「この関数は非同期処理を扱います」と宣言するもの
//await = 「Promiseの処理が終わるまで待つ」もの

//↓インスタンスメゾット
const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'kuukiire' });
    console.log(foundProduct);
    await foundProduct.toggleOnSale();
    console.log(foundProduct);
    await foundProduct.addCategory('アウトドア');
    console.log(foundProduct);
}

findProduct();
//  new Product()：JavaScript上でドキュメントを作るだけ（まだ保存されない）
// save()：そのドキュメントをMongoDBに保存する
// Product.create()：new Product() と save() をまとめて実行する便利なメソッド      
// const bike = new Product({
//     name: 'kuukiire',
//     price: 600000,
//     categories: ['安全装置']
// });

// bike.save()
//     .then(data => {
//         console.log('成功！！');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('エラーｰ！！');
//         console.log(err);
//     })


Product.findOneAndUpdate({ name: 'kuukiire' }, { price: 1980 }, { new: true, runValidators: true })
    .then(data => {
        console.log('成功！！');
        console.log(data);
    })
    .catch(err => {
        console.log('エラーｰ！！');
        console.log(err);
    })
