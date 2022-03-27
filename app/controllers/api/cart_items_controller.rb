class Api::CartItemsController < ApplicationController
  def index
    @cart_items = CartItem.all
    render :index
  end

  def show
    @cart_item = CartItem.find_by(id: params[:id])
    render :show
  end
  
  def create
    @cart_item = CartItem.new(cart_item_params)
    if @cart_item.save!
      render :show
    else
      render json: ['Must be signed in to add to cart'], status: 422
    end
  end

  def destroy
    @cart_item = CartItem.find_by(id: params[:id])
    @cart_item.destroy
    render "api/cart_items/show"
  end

  private

  def cart_item_params
    params.require(:cart_item).permit(:user_id, :tea_id, :price, :size)
  end
end
