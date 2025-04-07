from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ['id', 'name', 'description', 'city', 'address']

class VacancySerializer(serializers.Serializer):
    name = serializers.CharField(max_length=255)
    description = serializers.CharField(max_length=255)
    salary = serializers.FloatField()
    company = serializers.PrimaryKeyRelatedField(queryset=Company.objects.all())
    
    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)
    
    # class Meta:
    #     model = Vacancy
    #     fields = ['id', 'name', 'description', 'salary', 'company']
