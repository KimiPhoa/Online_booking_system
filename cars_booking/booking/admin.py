from django.contrib import admin
from .models import *

# Register your models here.
class CarAdmin(admin.ModelAdmin):
    pass


class BookingAdmin(admin.ModelAdmin):
    pass


admin.site.register(Car, CarAdmin)
admin.site.register(Booking, BookingAdmin)