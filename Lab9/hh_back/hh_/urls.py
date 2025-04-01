from django.contrib import admin
from django.urls import path
from hh_ import views

urlpatterns = [

    path('vacancies/', views.VacancyListView.as_view(), name='vacancy-list'),
    path('companies/', views.CompanyListView.as_view(), name='company-list'),
    path('vacancies/top_ten/', views.TopTenVacanciesView.as_view(), name="top_ten"),

    path('vacancies/<int:id>/', views.VacancyListView.as_view(), name='vacancy-detail'),
    path('companies/<int:id>/vacancies/', views.VacancyByCompany.as_view(), name='company-vacancies-list'),
]
