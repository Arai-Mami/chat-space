Rails.application.routes.draw do
  devise_for :users
  get 'messages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:edit, :update]
  resources :groups, only: [:new, :create, :edit, :update]
  root "groups#index"
  #トップページのアクセスでchatのメイン部分は表示せず、side_barのみ表示するようにする
end
