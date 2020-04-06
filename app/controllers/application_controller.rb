class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  #CSRF対策
  before_action :authenticate_user!
  #すべてのアクションが実行される前に、ログインしていない場合は、ログイン画面に背にするようになる
  before_action :configure_permitted_parameters, if: :devise_controller?
  #deviseコントローラーが動いたとき、

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    #deviseにnameを追加したため、deviseのパラメーターにも追加する
    #sign_upのとき
  end
end
