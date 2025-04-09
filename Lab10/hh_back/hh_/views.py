from rest_framework import generics
from .models import Vacancy, Company
from .serializers import VacancySerializer, CompanySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
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
@api_view(['GET', 'POST'])    
def ListVacancies(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return Response(serializer.data)
    if request.method == 'POST':
        vacancies = Vacancy.objects.all()

        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            vacancy = serializer.save()
            return Response(VacancySerializer(vacancy).data, status=201)
        return Response(serializer.errors, status=400)
   
        