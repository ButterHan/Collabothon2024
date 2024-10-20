﻿using System.Net.Http;
using System.Net.Http.Headers;
using System.Text.Json;
using System.Text.Json.Serialization;
using Microsoft.Extensions.DependencyInjection;

namespace SomethingFishy.Collabothon2024.Common;

public static class Extensions
{
    public static JsonSerializerOptions ForCommerzApi(this JsonSerializerOptions options)
    {
        options = new JsonSerializerOptions(JsonSerializerOptions.Default)
        {
            PropertyNamingPolicy = JsonNamingPolicy.CamelCase
        };
        options.Converters.Add(new CommerzPhoneTypeConverter());
        options.Converters.Add(new CommerzAddressTypeConverter());
        options.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
        options.Converters.Add(new JsonStringDecimalConverter());
        options.Converters.Add(new JsonDateOnlyConverter());
        return options;
    }

    public static JsonSerializerOptions ForCommerzMessages(this JsonSerializerOptions options)
    {
        options = new JsonSerializerOptions(JsonSerializerOptions.Default)
        {
            PropertyNamingPolicy = null
        };
        options.Converters.Add(new CommerzPhoneTypeConverter());
        options.Converters.Add(new CommerzAddressTypeConverter());
        options.Converters.Add(new JsonStringEnumConverter(JsonNamingPolicy.CamelCase));
        options.Converters.Add(new JsonStringDecimalConverter());
        options.Converters.Add(new JsonDateOnlyConverter());
        return options;
    }

    public static JsonSerializerOptions ForCommerzOauth(this JsonSerializerOptions options)
    {
        options = new JsonSerializerOptions(JsonSerializerOptions.Default)
        {
            PropertyNamingPolicy = JsonNamingPolicy.SnakeCaseLower
        };
        return options;
    }

    public static IServiceCollection AddCommerzClient(this IServiceCollection services)
        => services.AddScoped<ICommerzAccountsForeignUnitsClient, CommerzClient>()
            .AddScoped<ICommerzCorporatePaymentsClient, CommerzClient>()
            .AddScoped<ICommerzInstantNotificationsClient, CommerzClient>()
            .AddScoped<ICommerzCustomersClient, CommerzClient>()
            .AddScoped<ICommerzSecuritiesClient, CommerzClient>()
            .AddTransient<ICommerzOauthClient, CommerzClient>();

    internal static HttpRequestMessage WithAccessToken(this HttpRequestMessage req, string token)
    {
        req.Headers.Authorization = new AuthenticationHeaderValue("Bearer", token);
        return req;
    }
}
