from rest_framework import serializers
from .models import Car, Booking

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    car_model = serializers.CharField(source='car.model', read_only=True)
    price_per_day = serializers.DecimalField(source='car.price_per_day', max_digits=6, decimal_places=2, read_only=True)
    image = serializers.URLField(source='car.image', read_only=True)
    plate_no = serializers.CharField(source='car.plate_no', read_only=True)
    specifications = serializers.CharField(source='car.specifications', read_only=True)

    class Meta:
        model = Booking
        fields = [
            'id', 'booking_no', 'car', 'customer_name', 'start_date', 'end_date', 
            'car_model', 'price_per_day', 'image', 'plate_no', 'specifications'
        ]
        read_only_fields = ['booking_no']