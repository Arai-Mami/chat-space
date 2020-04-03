class ApplicationController < ActionController::Base
  protect_form_forgey with: :exception
  #CSRF対策
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
    #deviseにnameを追加したため、deviseのパラメーターにも追加する
    #sign_upのとき
  end
end
