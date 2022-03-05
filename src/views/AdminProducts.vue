<template>
    <div>
        這裡是 後台 產品列表
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width='120px'>分類</th>
                    <th>產品名稱</th>
                    <th width='120px'>原價</th>
                    <th width='120px'>售價</th>
                    <th width='100px'>是否啟用</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for='item in products' :key='item.id'>
                    <td>{{ item.category }}</td>
                    <td>{{ item.title }}</td>
                    <td class="text-end">
                        {{ item.origin_price }}
                    </td>
                    <td class="text-end">
                        {{ item.price }}
                    </td>
                    <td>
                        <span v-if='item.is_enabled' class='text-success'>啟用</span>
                        <span v-else>未啟用</span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name:'Products',
    props:['token'],
    data() {
        return {
            products: [],
        };
    },
    methods: {
        getProducts() {
            const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/all`
            this.$http.get(api)
            .then(res =>{
                this.products = res.data.products;
            })
            .catch(err =>{
                alert(err.data.message);
            });
        },
    },
    mounted() {
        this.getProducts();
    },
};
</script>