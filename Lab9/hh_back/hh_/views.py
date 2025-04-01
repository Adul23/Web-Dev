from rest_framework import generics
from .models import Vacancy, Company
from .serializers import VacancySerializer, CompanySerializer

class CompanyListView(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer

class VacancyListView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializer

class TopTenVacanciesView(generics.ListCreateAPIView):
    queryset = Vacancy.objects.order_by('salary')[:10]
    serializer_class = VacancySerializer

class VacancyByCompany(generics.ListAPIView):
    serializer_class = VacancySerializer

    def get_queryset(self):
        company_id = self.kwargs['id']
        return Vacancy.objects.filter(company_id=company_id)