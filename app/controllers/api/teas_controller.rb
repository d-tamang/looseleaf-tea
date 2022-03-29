class Api::TeasController < ApplicationController
  def index
    @teas = Tea.all.includes(:reviews)
    render :index
  end

  def show
    @tea = Tea.find_by(id: params[:id])
    render :show
  end

end
