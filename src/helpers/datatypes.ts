export interface ProductGroup {
    code: string,
    name: string,
}

export interface createOrderRequest {
    barcodes: string[],
    items: createOrderItem[],
    status: string,
    remark: string,
}

export interface createOrderItem {
    product_type_id: string,
    product_size_id: string,
    quantity: number,
}

export interface editOrderRequest {
    gm_id: string,
    is_paid: string,
    paid_date: string,
    customer_address: string,
    remark: string,
    etd_date: string,
    move_date: string,
    payment_method: string,
    items: any,
}

export interface deleteOrderRequest {
    gm_id: string,
}

export interface createNewPriceRequest {
    product_type_id: string,
    product_size_id: string,
    price_per_unit: string,
    price: number,
    effective_date : string,
    created_by: string,
}
