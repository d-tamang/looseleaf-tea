class Api::TeasController < ApplicationController

  private

  def tea_params
    params.require(:tea).permit(:id, :name, :category, :description, :price, :size)
  end

end
