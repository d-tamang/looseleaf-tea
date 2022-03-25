Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teas, only: [:index, :show]
    resources :cart_items
  end
  
  root "static_pages#root"
end
