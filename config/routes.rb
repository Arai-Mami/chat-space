Rails.application.routes.draw do
  devise_for :users
  get 'messages/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources :users, only: [:index, :edit, :update]
  resources :groups do
    #ルーティングをネスト
    resources :messages, only: [:index, :create]
  
    namespace :api do
      #namespaceを利用すると、そのディレクトリ内のアクションを指定することができる
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
  root "groups#index"
  #トップページのアクセスでchatのメイン部分は表示せず、side_barのみ表示するようにする
end
