from django.urls import path
from . import views

urlpatterns = [

    path('categories/', views.CategoryListView.as_view(), name='category-list'),
    path('products/', views.ProductListView.as_view(), name='product-list'),

    path('categories/<int:id>/', views.CategoryDetailView.as_view(), name='category-detail'),
    path('categories/<int:id>/products/', views.CategoryProductListView.as_view(), name='category-product-list'),
]
